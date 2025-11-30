---
title: CSVCMsg_Sounds
---

# Interface CSVCMsg_Sounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Sounds.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_Sounds : ITypedProtobuf<CSVCMsg_Sounds>, INativeHandle, INetMessage<CSVCMsg_Sounds>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_Sounds>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_Sounds>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### ReliableSound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Sounds.cs#L18)

```csharp
bool ReliableSound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Sounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Sounds.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_Sounds_sounddata_t> Sounds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSVCMsg_Sounds_sounddata_t](/docs/api/protobufdefinitions/csvcmsg_sounds_sounddata_t)>

