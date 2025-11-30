---
title: CMsgReplicateConVars
---

# Interface CMsgReplicateConVars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgReplicateConVars.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgReplicateConVars : ITypedProtobuf<CMsgReplicateConVars>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgReplicateConVars>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Convars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgReplicateConVars.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgConVarValue> Convars { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgConVarValue](/docs/api/protobufdefinitions/cmsgconvarvalue)>

