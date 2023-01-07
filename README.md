The Bench

GOAL: Create an app to navigate, develop, and test tools and ideas

The "Bench" will be a git repo with a collection of branches with each branch holding a
different test environments and resource connections.

Bench "base" branches examples
- main (not sure, maybe basic tests on repo(s))
- electron app
- express server
- http node server
- react server (maybe not really need)
- ect

These base branches can be equipped with basic resources and act as testing grounds
for current app development. When different setups are explored or an idea needs
to be drilled into, the base branch can be branched again. This can be repeated
forever. Base branches do not need to mirror any of the templates and can be
modified to better fit testing. If anything is done and needs to be added to the
templates, it can be shared manually.

The branches followed can be managed by the developers. This also means the developers
need to maintain the supporting files in their "bench" to support the branch
they are on. Currently this is specific to the management of node-modules. It
should be enough for the developer to npm install when they switch branches. After
they have worked on and installed every branch, they should have every needed
module installed (barring new modules).
