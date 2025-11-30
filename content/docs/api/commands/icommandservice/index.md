---
title: Interface ICommandService
---

# Interface ICommandService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Commands](/docs/api/commands)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ICommandService
```

## Methods

### HookClientChat(ClientChatHandler)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L83)

Hooks client chat, will be fired when a player sends any chat message.

```csharp
Guid HookClientChat(ICommandService.ClientChatHandler handler)
```

#### Parameters

- **handler**: [ICommandService](/docs/api/commands/icommandservice).[ClientChatHandler](/docs/api/commands/icommandservice/clientchathandler) - The handler callback for the client chat.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### HookClientCommand(ClientCommandHandler)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L71)

Hooks client commands, will be fired when a player sends any command.

```csharp
Guid HookClientCommand(ICommandService.ClientCommandHandler handler)
```

#### Parameters

- **handler**: [ICommandService](/docs/api/commands/icommandservice).[ClientCommandHandler](/docs/api/commands/icommandservice/clientcommandhandler) - The handler callback for the client command.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### IsCommandRegistered(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L65)

Checks if a command is registered.

```csharp
bool IsCommandRegistered(string commandName)
```

#### Parameters

- **commandName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command name.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the command is registered.

### RegisterCommand(string, CommandListener, bool, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L38)

Registers a command.

```csharp
Guid RegisterCommand(string commandName, ICommandService.CommandListener handler, bool registerRaw = false, string permission = "")
```

#### Parameters

- **commandName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command name.
- **handler**: [ICommandService](/docs/api/commands/icommandservice).[CommandListener](/docs/api/commands/icommandservice/commandlistener) - The handler callback for the command.
- **registerRaw**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If set to false, the command will not starts with a `sw_` prefix.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission required to use the command.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the command.

### RegisterCommandAlias(string, string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L46)

Registers a command alias.

```csharp
void RegisterCommandAlias(string commandName, string alias, bool registerRaw = false)
```

#### Parameters

- **commandName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command name.
- **alias**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The alias.
- **registerRaw**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If set to false, the alias will not starts with a `sw_` prefix.

### UnhookClientChat(Guid)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L89)

Unhooks a client chat.

```csharp
void UnhookClientChat(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the client chat.

### UnhookClientCommand(Guid)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L77)

Unhooks a client command.

```csharp
void UnhookClientCommand(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the client command.

### UnregisterCommand(Guid)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L52)

Unregisters a command.

```csharp
void UnregisterCommand(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The guid of the command.

### UnregisterCommand(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandService.cs#L58)

Unregisters all command listeners with the specified command name.

```csharp
void UnregisterCommand(string commandName)
```

#### Parameters

- **commandName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command name.

