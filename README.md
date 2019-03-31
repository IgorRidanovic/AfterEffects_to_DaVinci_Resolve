# AfterEffects_to_DaVinci_Resolve

Automatically imports Adobe After Effects renders into a DaVinci Resolve project.

Send to Resolve.jsx is a proof of concept Adobe After Effects script that facilitates automatic import of rendered After Effects comps to a freshly created DaVinci Resolve project. 

After Effects can render to any directory. For Projector to be aware of this directory specify the full path it in the Projector template file AE-Resolve.json along with the name of the bin you want to create in Resolve. The Project name and some basic project parameters are specified in Send to Resolve.jsx.

Save Send to Resolve.jsx in C:\Program Files\Adobe\Adobe After Effects CC 2015.3\Support Files\Scripts (Windows).
Save AE-Resolve.json anywhere and specify the path in Send to Resolve.jsx template variable.

Notes and depencencies:

This is the Windows version. Customize the send variable for MacOS and Linux.
Requires Resolve Studio V15 and above.
The script requires Meta Fide Projector from www.metafide.com. 
