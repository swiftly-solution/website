---
title: Interface ICommandService
---

```csharp
public interface ICommandService
```

## Methods

**HookClientChat(ClientChatHandler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L81)

```csharp
Guid HookClientChat(ICommandService.ClientChatHandler handler)
```

#### Parameters

- **handler**: [ICommandService](/docs/api/shared/commands/icommandservice).[ClientChatHandler](/docs/api/shared/commands/icommandservice/clientchathandler) - The handler callback for the client chat.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

**HookClientCommand(ClientCommandHandler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L69)

```csharp
void HookClientCommand(ICommandService.ClientCommandHandler handler)
```

#### Parameters

- **handler**: [ICommandService](/docs/api/shared/commands/icommandservice).[ClientCommandHandler](/docs/api/shared/commands/icommandservice/clientcommandhandler) - The handler callback for the client command.

**RegisterCommand(string, CommandListener, bool, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L42)

```csharp
Guid RegisterCommand(string commandName, ICommandService.CommandListener handler, bool registerRaw = false, string permission = "")
```

#### Parameters

- **commandName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command name.
- **handler**: [ICommandService](/docs/api/shared/commands/icommandservice).[CommandListener](/docs/api/shared/commands/icommandservice/commandlistener) - The handler callback for the command.
- **registerRaw**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If set to false, the command will not starts with a `sw_` prefix.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission required to use the command.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the command.

**RegisterCommandAlias(string, string, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L50)

```csharp
void RegisterCommandAlias(string commandName, string alias, bool registerRaw = false)
```

#### Parameters

- **commandName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command name.
- **alias**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The alias.
- **registerRaw**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If set to false, the alias will not starts with a `sw_` prefix.

**UnhookClientChat(Guid)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L87)

```csharp
void UnhookClientChat(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the client chat.

**UnhookClientCommand(Guid)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L75)

```csharp
void UnhookClientCommand(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the client command.

**UnregisterCommand(Guid)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L56)

```csharp
void UnregisterCommand(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the command.

**UnregisterCommand(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L62)

```csharp
void UnregisterCommand(string commandName)
```

#### Parameters

- **commandName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command name.

