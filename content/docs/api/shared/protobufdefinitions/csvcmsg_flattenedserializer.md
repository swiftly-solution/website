---
title: CSVCMsg_FlattenedSerializer
---

```csharp
public interface CSVCMsg_FlattenedSerializer : ITypedProtobuf<CSVCMsg_FlattenedSerializer>, INativeHandle, INetMessage<CSVCMsg_FlattenedSerializer>, IDisposable
```

#### Implements

## Properties

### Fields

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_FlattenedSerializer.cs#L24)

```csharp
IProtobufRepeatedFieldSubMessageType<ProtoFlattenedSerializerField_t> Fields { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[ProtoFlattenedSerializerField_t](/docs/api/shared/protobufdefinitions/protoflattenedserializerfield_t)>

### Serializers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_FlattenedSerializer.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<ProtoFlattenedSerializer_t> Serializers { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[ProtoFlattenedSerializer_t](/docs/api/shared/protobufdefinitions/protoflattenedserializer_t)>

### Symbols

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_FlattenedSerializer.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<string> Symbols { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

