---
title: PermModelExtPart_t
---

# Interface PermModelExtPart_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PermModelExtPart_t : ISchemaClass<PermModelExtPart_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PermModelExtPart_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L20)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L22)

```csharp
ref int Parent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RefModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L24)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RefModel { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCModel](/docs/api/schemadefinitions/infoforresourcetypecmodel)>

### Transform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L18)

```csharp
ref CTransform Transform { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

