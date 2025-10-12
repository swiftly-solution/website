---
title: CCSUsrMsg_EndOfMatchAllPlayersData
---

```csharp
public interface CCSUsrMsg_EndOfMatchAllPlayersData : ITypedProtobuf<CCSUsrMsg_EndOfMatchAllPlayersData>, INativeHandle, INetMessage<CCSUsrMsg_EndOfMatchAllPlayersData>, IDisposable
```

- Implements

## Properties

### **Allplayerdata** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData> Allplayerdata { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData](/docs/api/shared/protobufdefinitions/ccsusrmsg_endofmatchallplayersdata_playerdata)>

### **Scene** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData.cs#L21)

```csharp
int Scene { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

