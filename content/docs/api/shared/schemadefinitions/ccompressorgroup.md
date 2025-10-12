---
title: CCompressorGroup
---

```csharp
public interface CCompressorGroup : ISchemaClass<CCompressorGroup>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **BoolCompressor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L42)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> BoolCompressor { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>>

### **ChannelClass** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L18)

```csharp
ref CUtlVector<CString> ChannelClass { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CString](/docs/api/shared/natives/cstring)>

### **ColorCompressor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L44)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> ColorCompressor { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>>

### **CompressorIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L28)

```csharp
ref CUtlVector<int> CompressorIndex { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **ElementMask** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L34)

```csharp
ref CUtlVector<uint> ElementMask { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **ElementNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L30)

```csharp
ref CUtlVector<CUtlVector<CString>> ElementNames { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlVector](/docs/api/-1)<[CString](/docs/api/shared/natives/cstring)>>

### **ElementUniqueID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L32)

```csharp
ref CUtlVector<CUtlVector<int>> ElementUniqueID { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### **Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L24)

```csharp
ref CUtlVector<int> Flags { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **Grouping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L26)

```csharp
ref CUtlVector<CUtlString> Grouping { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **IntCompressor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L40)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> IntCompressor { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>>

### **QuaternionCompressor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L38)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> QuaternionCompressor { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>>

### **TotalElementCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L16)

```csharp
ref int TotalElementCount { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L22)

```csharp
ref CUtlVector<fieldtype_t> Type { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[fieldtype_t](/docs/api/shared/schemadefinitions/fieldtype_t)>

### **VariableName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L20)

```csharp
ref CUtlVector<CString> VariableName { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CString](/docs/api/shared/natives/cstring)>

### **Vector2DCompressor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L46)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> Vector2DCompressor { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>>

### **Vector4DCompressor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L48)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> Vector4DCompressor { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>>

### **VectorCompressor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCompressorGroup.cs#L36)

```csharp
ref CUtlVector<PointerTo<SchemaUntypedField>> VectorCompressor { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>>

