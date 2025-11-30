---
title: CSVCMsg_ClassInfo
---

# Interface CSVCMsg_ClassInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ClassInfo.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_ClassInfo : ITypedProtobuf<CSVCMsg_ClassInfo>, INativeHandle, INetMessage<CSVCMsg_ClassInfo>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_ClassInfo>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_ClassInfo>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Classes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ClassInfo.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_ClassInfo_class_t> Classes { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSVCMsg_ClassInfo_class_t](/docs/api/protobufdefinitions/csvcmsg_classinfo_class_t)>

### CreateOnClient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ClassInfo.cs#L18)

```csharp
bool CreateOnClient { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

