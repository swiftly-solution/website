---
title: CPulse_InvokeBinding
---

# Interface CPulse_InvokeBinding

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_InvokeBinding.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulse_InvokeBinding : ISchemaClass<CPulse_InvokeBinding>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulse_InvokeBinding>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CellIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_InvokeBinding.cs#L23)

```csharp
PulseRuntimeCellIndex_t CellIndex { get; }
```

#### Property Value

- [PulseRuntimeCellIndex_t](/docs/api/schemadefinitions/pulseruntimecellindex_t)

### FuncName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_InvokeBinding.cs#L21)

```csharp
SchemaUntypedField FuncName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### RegisterMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_InvokeBinding.cs#L18)

```csharp
PulseRegisterMap_t RegisterMap { get; }
```

#### Property Value

- [PulseRegisterMap_t](/docs/api/schemadefinitions/pulseregistermap_t)

### SrcChunk

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_InvokeBinding.cs#L25)

```csharp
PulseRuntimeChunkIndex_t SrcChunk { get; }
```

#### Property Value

- [PulseRuntimeChunkIndex_t](/docs/api/schemadefinitions/pulseruntimechunkindex_t)

### SrcInstruction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_InvokeBinding.cs#L27)

```csharp
ref int SrcInstruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

