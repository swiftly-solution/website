---
title: PermModelExtPart_t
---

```csharp
public interface PermModelExtPart_t : ISchemaClass<PermModelExtPart_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L19)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L21)

```csharp
ref int Parent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RefModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L23)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RefModel { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### Transform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelExtPart_t.cs#L17)

```csharp
ref CTransform Transform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

