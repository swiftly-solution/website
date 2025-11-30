---
title: CNETMsg_SignonState
---

# Interface CNETMsg_SignonState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNETMsg_SignonState : ITypedProtobuf<CNETMsg_SignonState>, INativeHandle, INetMessage<CNETMsg_SignonState>, IDisposable
```

#### Implements

- [ITypedProtobuf<CNETMsg_SignonState>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CNETMsg_SignonState>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Addons

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L33)

```csharp
string Addons { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MapName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L30)

```csharp
string MapName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NumServerPlayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L24)

```csharp
uint NumServerPlayers { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayersNetworkids

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L27)

```csharp
IProtobufRepeatedFieldValueType<string> PlayersNetworkids { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### SignonState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L18)

```csharp
SignonState_t SignonState { get; set; }
```

#### Property Value

- [SignonState_t](/docs/api/protobufdefinitions/signonstate_t)

### SpawnCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L21)

```csharp
uint SpawnCount { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

