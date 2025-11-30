---
title: CCompressorGroup
---

# Interface CCompressorGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCompressorGroup : ISchemaClass<CCompressorGroup>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CCompressorGroup>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoolCompressor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L44)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> BoolCompressor { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>>

### ChannelClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L20)

```csharp
ref CUtlVector<CString> ChannelClass { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CString](/docs/api/natives/cstring)>

### ColorCompressor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L46)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> ColorCompressor { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>>

### CompressorIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L30)

```csharp
ref CUtlVector<int> CompressorIndex { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ElementMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L36)

```csharp
ref CUtlVector<uint> ElementMask { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ElementNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L32)

```csharp
ref CUtlVector<CUtlVector<CString>> ElementNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlVector](/docs/api/natives/cutlvectort)<[CString](/docs/api/natives/cstring)>>

### ElementUniqueID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L34)

```csharp
ref CUtlVector<CUtlVector<int>> ElementUniqueID { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L26)

```csharp
ref CUtlVector<int> Flags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Grouping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L28)

```csharp
ref CUtlVector<CUtlString> Grouping { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### IntCompressor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L42)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> IntCompressor { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>>

### QuaternionCompressor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L40)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> QuaternionCompressor { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>>

### TotalElementCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L18)

```csharp
ref int TotalElementCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L24)

```csharp
ref CUtlVector<fieldtype_t> Type { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[fieldtype_t](/docs/api/schemadefinitions/fieldtype_t)>

### VariableName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L22)

```csharp
ref CUtlVector<CString> VariableName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CString](/docs/api/natives/cstring)>

### Vector2DCompressor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L48)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> Vector2DCompressor { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>>

### Vector4DCompressor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L50)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> Vector4DCompressor { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>>

### VectorCompressor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L38)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> VectorCompressor { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>>

