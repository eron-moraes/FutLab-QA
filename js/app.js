const { createApp } = Vue;

createApp({
    data() {
        return {
            teams: window.teams,

            positions: [
                "Goleiro",
                "Zagueiro",
                "Lateral",
                "Volante",
                "Meia",
                "Atacante"
            ],

            players: [],

            player: {
                name: "",
                birthDate: "",
                position: "",
                foot: "",
                height: "",
                weight: "",
                team: null,
                status: ""
            },

            selectedColor: "transparent"
        };
    },

    methods: {
        updateTeamColors() {
            this.selectedColor = this.player.team
                ? this.player.team.color
                : "transparent";
        },

        addPlayer() {
            if (
                !this.player.name ||
                !this.player.birthDate ||
                !this.player.position ||
                !this.player.foot ||
                !this.player.height ||
                !this.player.weight ||
                !this.player.team ||
                !this.player.status
            ) {
                alert("Preencha todos os campos");
                return;
            }

            this.players.push({ ...this.player });

            // Reset
            this.player = {
                name: "",
                birthDate: "",
                position: "",
                foot: "",
                height: "",
                weight: "",
                team: null,
                status: ""
            };

            this.selectedColor = "transparent";
        }
    }
}).mount("#app");
