---
title: CSVCMsg_GameEvent
---

```csharp
public interface CSVCMsg_GameEvent : ITypedProtobuf<CSVCMsg_GameEvent>, INativeHandle
```

#### Implements

## Properties

**EventName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEvent.cs#L13)

```csharp
string EventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Eventid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEvent.cs#L16)

```csharp
int Eventid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Keys** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEvent.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_GameEvent_key_t> Keys { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CSVCMsg_GameEvent_key_t](/docs/api/shared/protobufdefinitions/csvcmsg_gameevent_key_t)>

