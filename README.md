# Token Factory Builder

Welcome to the Token Factory Builder! This tool will assist you in creating a project for deploying synthetic token smart contracts, customized to your specifications.

## Token Standards

This tool supports the following token standards out of the box:

- ERC20
- IERC20
- ERC721
- IERC721
- ERC777
- IERC777
- Diamond Standard

You can select one of these standards when you run the tool.

## Token Types

The token standards are organized into different categories for better organization and extensibility:

1. **Most Common token types**: This category contains the most commonly used token standards like ERC20, ERC721, etc. This makes it easy for users who want to create a token with these popular standards.

2. **ERC Standards approved token types**: This category contains other ERC standards that are approved but not as commonly used. Separating these from the most common ones helps to keep the options organized and manageable.

3. **User added token types**: This category is for extensibility. Users can add their own token standards, which makes the tool more flexible and adaptable to various needs. Having a template for user-added token types provides a structured way for users to add their own standards.

By separating these into different categories, the tool adheres to the Single Responsibility Principle, making it easier to understand, test, and debug.

## Adding Custom Token Standards

You can add your own token standards by creating a new Solidity file in the `src/contracts/user/` directory. The tool will automatically detect these files and include them as options when you run it.

## Getting Started

To get started with the Token Factory Builder, clone the repository and install the dependencies.


```bash
git clone https://github.com/your-repo/token-factory-builder.git
cd token-factory-builder
npm install
```

## Usage

To start the Token Factory Builder, run the following command:

```bash
npm start
```

This will start the interactive script that will guide you through the process of creating your synthetic token smart contract project.

## Contributing

We encourage contributions from the open-source community. Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
