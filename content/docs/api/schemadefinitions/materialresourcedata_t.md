---
title: MaterialResourceData_t
---

# Interface MaterialResourceData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface MaterialResourceData_t : ISchemaClass<MaterialResourceData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<MaterialResourceData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DynamicParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L30)

```csharp
ref CUtlVector<MaterialParamBuffer_t> DynamicParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamBuffer_t](/docs/api/schemadefinitions/materialparambuffer_t)>

### DynamicTextureParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L32)

```csharp
ref CUtlVector<MaterialParamBuffer_t> DynamicTextureParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamBuffer_t](/docs/api/schemadefinitions/materialparambuffer_t)>

### FloatAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L36)

```csharp
ref CUtlVector<MaterialParamFloat_t> FloatAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamFloat_t](/docs/api/schemadefinitions/materialparamfloat_t)>

### FloatParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L24)

```csharp
ref CUtlVector<MaterialParamFloat_t> FloatParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamFloat_t](/docs/api/schemadefinitions/materialparamfloat_t)>

### IntAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L34)

```csharp
ref CUtlVector<MaterialParamInt_t> IntAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamInt_t](/docs/api/schemadefinitions/materialparamint_t)>

### IntParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L22)

```csharp
ref CUtlVector<MaterialParamInt_t> IntParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamInt_t](/docs/api/schemadefinitions/materialparamint_t)>

### MaterialName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L18)

```csharp
string MaterialName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RenderAttributesUsed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L44)

```csharp
ref CUtlVector<CUtlString> RenderAttributesUsed { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### ShaderName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L20)

```csharp
string ShaderName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StringAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L42)

```csharp
ref CUtlVector<MaterialParamString_t> StringAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamString_t](/docs/api/schemadefinitions/materialparamstring_t)>

### TextureAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L40)

```csharp
ref CUtlVector<MaterialParamTexture_t> TextureAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamTexture_t](/docs/api/schemadefinitions/materialparamtexture_t)>

### TextureParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L28)

```csharp
ref CUtlVector<MaterialParamTexture_t> TextureParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamTexture_t](/docs/api/schemadefinitions/materialparamtexture_t)>

### VectorAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L38)

```csharp
ref CUtlVector<MaterialParamVector_t> VectorAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamVector_t](/docs/api/schemadefinitions/materialparamvector_t)>

### VectorParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialResourceData_t.cs#L26)

```csharp
ref CUtlVector<MaterialParamVector_t> VectorParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialParamVector_t](/docs/api/schemadefinitions/materialparamvector_t)>

