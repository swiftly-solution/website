---
title: CNETMsg_SignonState
---

```csharp
public interface CNETMsg_SignonState : ITypedProtobuf<CNETMsg_SignonState>, INativeHandle, INetMessage<CNETMsg_SignonState>, IDisposable
```

#### Implements

## Properties

**Addons** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L33)

```csharp
string Addons { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**MapName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L30)

```csharp
string MapName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**NumServerPlayers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L24)

```csharp
uint NumServerPlayers { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**PlayersNetworkids** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L27)

```csharp
IProtobufRepeatedFieldValueType<string> PlayersNetworkids { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

**SignonState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L18)

```csharp
SignonState_t SignonState { get; set; }
```

#### Property Value

- [SignonState_t](/docs/api/shared/protobufdefinitions/signonstate_t)

**SpawnCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SignonState.cs#L21)

```csharp
uint SpawnCount { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

