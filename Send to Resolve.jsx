// Automatically create a DaVinci Resolve project and import After Effects rendered comps.
// Requires Meta Fide Projector, www.metafide.com.
// If Projector is not added to the PATH system environment variable use the full path to
// the projector executable. Windows version. For MacOS and Linux modify the send variable.
// Igor Ridanovic, Meta Fide, 2019

{
	// Start render.
	app.project.renderQueue.render();
			
	// Resolve project name.
	var project    = "-p From_After_Effects ";

	// Resolve project frame rate.
	var fps        = "-f 23.976 ";

	// Resolve project resolution.
	var resolution = "-r 1920x1080 ";

	// Resolve project template. The template references the render directory.
	var template   = "-t D:\\AE-to-Resolve_Demo\\AE-Resolve.json ";

	// Assemble the Projector executable string with the list of arguments.
	var send = "cmd.exe /c projector " + project + fps + resolution + template

	// Call Projector.
	system.callSystem(send);
}
