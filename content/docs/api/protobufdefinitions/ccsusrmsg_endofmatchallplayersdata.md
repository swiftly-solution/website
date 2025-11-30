---
title: CCSUsrMsg_EndOfMatchAllPlayersData
---

# Interface CCSUsrMsg_EndOfMatchAllPlayersData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_EndOfMatchAllPlayersData : ITypedProtobuf<CCSUsrMsg_EndOfMatchAllPlayersData>, INativeHandle, INetMessage<CCSUsrMsg_EndOfMatchAllPlayersData>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_EndOfMatchAllPlayersData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_EndOfMatchAllPlayersData>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Allplayerdata

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData> Allplayerdata { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData](/docs/api/protobufdefinitions/ccsusrmsg_endofmatchallplayersdata_playerdata)>

### Scene

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData.cs#L21)

```csharp
int Scene { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

