const { createApp } = Vue;

createApp({
    data() {
        return {
            teams,
            players: [],
            player: {
                name: "",
                team: ""
            },
            selectedColor: "transparent"
        };
    },

    methods: {
        updateTeamColors() {
            this.selectedColor = this.player.team.color || "transparent";
        },

        addPlayer() {
            if (!this.player.name || !this.player.team) return;

            this.players.push({
                name: this.player.name,
                team: this.player.team
            });

            // Reset form
            this.player.name = "";
            this.player.team = "";
            this.selectedColor = "transparent";
        }
    }
}).mount("#app");
