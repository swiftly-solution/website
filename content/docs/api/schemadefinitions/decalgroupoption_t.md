---
title: DecalGroupOption_t
---

# Interface DecalGroupOption_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DecalGroupOption_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface DecalGroupOption_t : ISchemaClass<DecalGroupOption_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<DecalGroupOption_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EnableAngleBetweenNormalAndGravityRange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DecalGroupOption_t.cs#L24)

```csharp
ref bool EnableAngleBetweenNormalAndGravityRange { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Material

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DecalGroupOption_t.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### MaxAngleBetweenNormalAndGravity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DecalGroupOption_t.cs#L28)

```csharp
ref float MaxAngleBetweenNormalAndGravity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinAngleBetweenNormalAndGravity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DecalGroupOption_t.cs#L26)

```csharp
ref float MinAngleBetweenNormalAndGravity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Probability

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DecalGroupOption_t.cs#L22)

```csharp
ref float Probability { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SequenceName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DecalGroupOption_t.cs#L20)

```csharp
ref CGlobalSymbol SequenceName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

