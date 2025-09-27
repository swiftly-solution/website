---
title: CMsgSource1LegacyGameEvent
---

```csharp
public interface CMsgSource1LegacyGameEvent : ITypedProtobuf<CMsgSource1LegacyGameEvent>, INativeHandle, INetMessage<CMsgSource1LegacyGameEvent>, IDisposable
```

#### Implements

## Properties

**EventName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyGameEvent.cs#L18)

```csharp
string EventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Eventid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyGameEvent.cs#L21)

```csharp
int Eventid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Keys** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyGameEvent.cs#L24)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource1LegacyGameEvent_key_t> Keys { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSource1LegacyGameEvent_key_t](/docs/api/shared/protobufdefinitions/cmsgsource1legacygameevent_key_t)>

**Passthrough** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyGameEvent.cs#L30)

```csharp
int Passthrough { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ServerTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyGameEvent.cs#L27)

```csharp
int ServerTick { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

