---
title: ICommandService.ClientChatHandler
---

# Delegate ICommandService.ClientChatHandler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L28)

**Namespace**: [SwiftlyS2.Shared.Commands](/docs/api/commands)

**Assembly**: SwiftlyS2.CS2.dll

The handler for the client chat hook.

```csharp
public delegate HookResult ICommandService.ClientChatHandler(int playerId, string text, bool teamonly)
```

#### Parameters

- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player id.
- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text.
- **teamonly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the text is for team only.

#### Returns

- [HookResult](/docs/api/misc/hookresult) - Whether the text should continue to be sent.

