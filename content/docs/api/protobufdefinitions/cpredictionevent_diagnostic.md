---
title: CPredictionEvent_Diagnostic
---

# Interface CPredictionEvent_Diagnostic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Diagnostic.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPredictionEvent_Diagnostic : ITypedProtobuf<CPredictionEvent_Diagnostic>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CPredictionEvent_Diagnostic>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ExecutionSync

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Diagnostic.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<uint> ExecutionSync { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Id

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Diagnostic.cs#L13)

```csharp
uint Id { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RequestedPlayerIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Diagnostic.cs#L19)

```csharp
uint RequestedPlayerIndex { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RequestedSync

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Diagnostic.cs#L16)

```csharp
uint RequestedSync { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

