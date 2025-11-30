---
title: FeQuad_t
---

# Interface FeQuad_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeQuad_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FeQuad_t : ISchemaClass<FeQuad_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FeQuad_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Node

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeQuad_t.cs#L18)

```csharp
ISchemaFixedArray<ushort> Node { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### Shape

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeQuad_t.cs#L22)

```csharp
ISchemaFixedArray<Vector4D> Shape { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[Vector4D](/docs/api/natives/vector4d)>

### Slack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeQuad_t.cs#L20)

```csharp
ref float Slack { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

