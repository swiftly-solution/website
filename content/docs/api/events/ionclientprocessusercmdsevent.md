---
title: IOnClientProcessUsercmdsEvent
---

# Interface IOnClientProcessUsercmdsEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L9)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a client processes user commands.
This callback is a hot path, be careful with it and don't do anything expensive.

```csharp
public interface IOnClientProcessUsercmdsEvent
```

## Properties

### Margin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L29)

The margin of the client, milliseconds.

```csharp
float Margin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Paused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L24)

Whether the client is paused.

```csharp
bool Paused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L14)

The player ID of the client that processed the user commands.

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Usercmds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L19)

The user commands that the client processed.

```csharp
List<CSGOUserCmdPB> Usercmds { get; }
```

#### Property Value

- [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[CSGOUserCmdPB](/docs/api/protobufdefinitions/csgousercmdpb)>

