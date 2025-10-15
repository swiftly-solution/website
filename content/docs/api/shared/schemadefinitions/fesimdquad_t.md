---
title: FeSimdQuad_t
---

```csharp
public interface FeSimdQuad_t : ISchemaClass<FeSimdQuad_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### F4Slack

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L20)

```csharp
ref fltx4 F4Slack { get; }
```

#### Property Value

- [fltx4](/docs/api/shared/natives/fltx4)

### F4Weights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L24)

```csharp
ISchemaFixedArray<fltx4> F4Weights { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[fltx4](/docs/api/shared/natives/fltx4)>

### Node

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L18)

```csharp
SchemaUntypedField Node { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Shape

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L22)

```csharp
ISchemaFixedArray<FourVectors> Shape { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[FourVectors](/docs/api/shared/natives/fourvectors)>

