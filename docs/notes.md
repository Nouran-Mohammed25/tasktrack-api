    # Technical Notes

## Biggest Docker Problem and How I Solved It
Initially, running the `docker build` command worked but resulted in a warning:
"No output specified with docker-container driver", meaning the image stayed
in the build cache and was not available locally. I solved this by adding
the `--load` flag to the build command: `docker build --load -t tasktrack-api .`,
which loaded the image into the local Docker engine. I also used a multi-stage
build to ensure a smaller final image.

## Most Important Git/GitHub Lesson
I learned that meaningful commit messages and a clean `.gitignore` are critical.
At first, Git was tracking the `node_modules` folder, causing hundreds of
warnings. I learned how to use `git rm -r --cached .` combined with a correct
`.gitignore` to untrack unnecessary files and keep the repository clean and
professional.