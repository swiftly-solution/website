---
title: CPulse_CallInfo
---

# Interface CPulse_CallInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulse_CallInfo : ISchemaClass<CPulse_CallInfo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulse_CallInfo>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CallMethodID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L25)

```csharp
PulseDocNodeID_t CallMethodID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### EditorNodeID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L21)

```csharp
PulseDocNodeID_t EditorNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### PortName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L19)

```csharp
SchemaUntypedField PortName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### RegisterMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L23)

```csharp
PulseRegisterMap_t RegisterMap { get; }
```

#### Property Value

- [PulseRegisterMap_t](/docs/api/schemadefinitions/pulseregistermap_t)

### SrcChunk

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L27)

```csharp
PulseRuntimeChunkIndex_t SrcChunk { get; }
```

#### Property Value

- [PulseRuntimeChunkIndex_t](/docs/api/schemadefinitions/pulseruntimechunkindex_t)

### SrcInstruction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L29)

```csharp
ref int SrcInstruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

