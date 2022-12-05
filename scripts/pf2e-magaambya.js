Hooks.on("init", async () => {
	game.settings.register("pf2e-magaambya", "hideNPCs", {
		scope: "world",
		config: true,
		name: "Hide non-Player Token Targets",
		hint: "Hides not owned by players tokens from the target list of a damage roll.",
		type: Boolean,
		default: false
	});
});


