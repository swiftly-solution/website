---
title: CSVCMsg_Sounds
---

```csharp
public interface CSVCMsg_Sounds : ITypedProtobuf<CSVCMsg_Sounds>, INativeHandle, INetMessage<CSVCMsg_Sounds>, IDisposable
```

#### Implements

## Properties

### ReliableSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Sounds.cs#L18)

```csharp
bool ReliableSound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Sounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Sounds.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_Sounds_sounddata_t> Sounds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CSVCMsg_Sounds_sounddata_t](/docs/api/shared/protobufdefinitions/csvcmsg_sounds_sounddata_t)>

