const { select, input } = require('@inquirer/prompts');

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
};

let metas = [meta];

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta" });

    if (meta.length === 0) {
        console.log('A meta não pode ser vazia.');
        return;
    }

    metas.push({ value: meta, checked: false });
};

const start = async () => {
    while (true) {
        const opcao = await select({
            message: "Escolha uma opção",
            choices: [
                { name: "Cadastrar Meta", value: "cadastrar" },
                { name: "Listar Metas", value: "listar" },
                { name: "Sair", value: "sair" }
            ]
        });

        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta();
                console.log(metas);
                break;
            case "listar":
                console.log("Metas:");
                metas.forEach(meta => console.log(meta.value));
                break;
            case "sair":
                console.log("Até a próxima!");
                return;
        }
    }
};

start();
