export default function(context) {
    return {
      VariableDeclaration(node) {
          // tipo de variable const
            if (node.kind === "const") {
              const declaration = node.declarations[0];
            
              // asegurarnos que el valor es un numero
              if (typeof declaration.init.value === "number") {
                if (declaration.id.name !== declaration.id.name.toUpperCase()) {
                  context.report({
                    node: declaration.id,
                    message: "El nombre de la constante debe estar en mayúsculas",
                    fix: function(fixer) {
                      return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
                    }
                })
              }
            }
          }
      }
    };
  };