// Type definitions for pull-pushable 2.0.0
// Project: https://github.com/pull-stream/pull-pushable
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module 'pull-pushable' {
type Pushable = {
    push: (buffer: Buffer) => void
};

type PullPushable = () => Pushable;

export = PullPushable;
}
