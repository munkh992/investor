sudo mkdir -p /mnt/DATA/ollama/models
sudo mkdir -p /mnt/DATA/pipx
sudo chown -R $USER:$USER /mnt/DATA/ollama
sudo chown -R $USER:$USER /mnt/DATA/pipx


# Stop ollama service first
sudo systemctl stop ollama 2>/dev/null || true

# Move existing ollama models
if [ -d "$HOME/.ollama/models" ]; then
    cp -r $HOME/.ollama/models/* /mnt/DATA/ollama/models/ 2>/dev/null || true
    rm -rf $HOME/.ollama/models
fi

# Create symlink for ollama
mkdir -p $HOME/.ollama
ln -s /mnt/DATA/ollama/models $HOME/.ollama/models


# Move existing pipx packages
if [ -d "$HOME/.local/pipx" ]; then
    cp -r $HOME/.local/pipx/* /mnt/DATA/pipx/ 2>/dev/null || true
    rm -rf $HOME/.local/pipx
fi

# Create symlink for pipx
mkdir -p $HOME/.local
ln -s /mnt/DATA/pipx $HOME/.local/pipx


# Add to your shell config file (.bashrc or .zshrc)
echo 'export PIPX_HOME=/mnt/DATA/pipx' >> ~/.bashrc
echo 'export PIPX_BIN_DIR=/mnt/DATA/pipx/bin' >> ~/.bashrc
echo 'export PATH=$PATH:/mnt/DATA/pipx/bin' >> ~/.bashrc

# Reload shell config
source ~/.bashrc


# Check symlinks
ls -la ~/.ollama/models
ls -la ~/.local/pipx

# Check disk usage
df -h /
df -h /mnt/DATA

# Restart ollama service if it was running
sudo systemctl start ollama 2>/dev/null || true

