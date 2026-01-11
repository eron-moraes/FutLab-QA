const { createApp } = Vue;

createApp({
    data() {
        return {
            teams,
            positions: [
                "Goleiro",
                "Lateral Direito",
                "Lateral Esquerdo",
                "Zagueiro",
                "Volante",
                "Meia",
                "Atacante",
                "Ponta Direita",
                "Ponta Esquerda",
                "Centroavante"
            ],
            players: [],
            player: {
                name: "",
                number: null,
                position: "",
                foot: "",
                height: null,
                photo: null,
                photoPreview: null,
                team: ""
            },
            selectedColor: "transparent"
        };
    },

    methods: {
        validateNumber(event) {
            const value = event.target.value;
            // Limita a 3 dígitos
            if (value.length > 3) {
                event.target.value = value.slice(0, 3);
                this.player.number = parseInt(value.slice(0, 3)) || null;
            }
            // Garante que não ultrapasse 999
            if (this.player.number > 999) {
                this.player.number = 999;
                event.target.value = 999;
            }
        },

        updateTeamColors() {
            this.selectedColor = this.player.team.color || "transparent";
        },

        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.player.photoPreview = e.target.result;
                    this.player.photo = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        addPlayer() {
            if (!this.player.name || !this.player.number || !this.player.position || 
                !this.player.foot || !this.player.height || !this.player.team) {
                return;
            }

            this.players.push({
                name: this.player.name,
                number: this.player.number,
                position: this.player.position,
                foot: this.player.foot,
                height: this.player.height.toFixed(2),
                photo: this.player.photo,
                team: this.player.team
            });

            // Reset form
            this.player = {
                name: "",
                number: null,
                position: "",
                foot: "",
                height: null,
                photo: null,
                photoPreview: null,
                team: ""
            };
            this.selectedColor = "transparent";
            
            // Reset file input
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) {
                fileInput.value = "";
            }
        }
    }
}).mount("#app");
