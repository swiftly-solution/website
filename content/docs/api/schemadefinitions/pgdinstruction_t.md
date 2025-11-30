---
title: PGDInstruction_t
---

# Interface PGDInstruction_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PGDInstruction_t : ISchemaClass<PGDInstruction_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PGDInstruction_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlackboardReferenceIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L40)

```csharp
PulseRuntimeBlackboardReferenceIndex_t BlackboardReferenceIdx { get; }
```

#### Property Value

- [PulseRuntimeBlackboardReferenceIndex_t](/docs/api/schemadefinitions/pulseruntimeblackboardreferenceindex_t)

### CallInfoIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L34)

```csharp
PulseRuntimeCallInfoIndex_t CallInfoIndex { get; }
```

#### Property Value

- [PulseRuntimeCallInfoIndex_t](/docs/api/schemadefinitions/pulseruntimecallinfoindex_t)

### Chunk

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L30)

```csharp
PulseRuntimeChunkIndex_t Chunk { get; }
```

#### Property Value

- [PulseRuntimeChunkIndex_t](/docs/api/schemadefinitions/pulseruntimechunkindex_t)

### Code

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L18)

```csharp
ref PulseInstructionCode_t Code { get; }
```

#### Property Value

- [PulseInstructionCode_t](/docs/api/schemadefinitions/pulseinstructioncode_t)

### ConstIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L36)

```csharp
PulseRuntimeConstantIndex_t ConstIdx { get; }
```

#### Property Value

- [PulseRuntimeConstantIndex_t](/docs/api/schemadefinitions/pulseruntimeconstantindex_t)

### DestInstruction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L32)

```csharp
ref int DestInstruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DomainValueIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L38)

```csharp
PulseRuntimeDomainValueIndex_t DomainValueIdx { get; }
```

#### Property Value

- [PulseRuntimeDomainValueIndex_t](/docs/api/schemadefinitions/pulseruntimedomainvalueindex_t)

### InvokeBindingIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L28)

```csharp
PulseRuntimeInvokeIndex_t InvokeBindingIndex { get; }
```

#### Property Value

- [PulseRuntimeInvokeIndex_t](/docs/api/schemadefinitions/pulseruntimeinvokeindex_t)

### Reg0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L22)

```csharp
PulseRuntimeRegisterIndex_t Reg0 { get; }
```

#### Property Value

- [PulseRuntimeRegisterIndex_t](/docs/api/schemadefinitions/pulseruntimeregisterindex_t)

### Reg1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L24)

```csharp
PulseRuntimeRegisterIndex_t Reg1 { get; }
```

#### Property Value

- [PulseRuntimeRegisterIndex_t](/docs/api/schemadefinitions/pulseruntimeregisterindex_t)

### Reg2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L26)

```csharp
PulseRuntimeRegisterIndex_t Reg2 { get; }
```

#### Property Value

- [PulseRuntimeRegisterIndex_t](/docs/api/schemadefinitions/pulseruntimeregisterindex_t)

### Var

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PGDInstruction_t.cs#L20)

```csharp
PulseRuntimeVarIndex_t Var { get; }
```

#### Property Value

- [PulseRuntimeVarIndex_t](/docs/api/schemadefinitions/pulseruntimevarindex_t)

