---
title: CSVCMsg_FlattenedSerializer
---

# Interface CSVCMsg_FlattenedSerializer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_FlattenedSerializer.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_FlattenedSerializer : ITypedProtobuf<CSVCMsg_FlattenedSerializer>, INativeHandle, INetMessage<CSVCMsg_FlattenedSerializer>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_FlattenedSerializer>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_FlattenedSerializer>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Fields

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_FlattenedSerializer.cs#L24)

```csharp
IProtobufRepeatedFieldSubMessageType<ProtoFlattenedSerializerField_t> Fields { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[ProtoFlattenedSerializerField_t](/docs/api/protobufdefinitions/protoflattenedserializerfield_t)>

### Serializers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_FlattenedSerializer.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<ProtoFlattenedSerializer_t> Serializers { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[ProtoFlattenedSerializer_t](/docs/api/protobufdefinitions/protoflattenedserializer_t)>

### Symbols

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_FlattenedSerializer.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<string> Symbols { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

