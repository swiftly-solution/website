---
title: ICommandService.ClientCommandHandler
---

```csharp
public delegate HookResult ICommandService.ClientCommandHandler(int playerId, string commandLine)
```

- Parameters

- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player id.
- **commandLine**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command line.

- Returns

- [HookResult](/docs/api/shared/misc/hookresult) - Whether the command should continue to be sent.

