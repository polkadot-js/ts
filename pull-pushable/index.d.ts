// Type definitions for pull-pushable 2.0.0
// Project: https://github.com/pull-stream/pull-pushable
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

type Pushable = {
    push: (buffer: Buffer) => void
};

declare type PullPushable = () => Pushable;

export = PullPushable;
