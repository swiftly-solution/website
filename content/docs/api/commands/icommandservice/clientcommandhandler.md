---
title: ICommandService.ClientCommandHandler
---

# Delegate ICommandService.ClientCommandHandler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L19)

**Namespace**: [SwiftlyS2.Shared.Commands](/docs/api/commands)

**Assembly**: SwiftlyS2.CS2.dll

The handler for the client command hook.

```csharp
public delegate HookResult ICommandService.ClientCommandHandler(int playerId, string commandLine)
```

#### Parameters

- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player id.
- **commandLine**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command line.

#### Returns

- [HookResult](/docs/api/misc/hookresult) - Whether the command should continue to be sent.

