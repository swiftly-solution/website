---
title: EntityRenderAttribute_t
---

# Interface EntityRenderAttribute_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityRenderAttribute_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface EntityRenderAttribute_t : ISchemaClass<EntityRenderAttribute_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<EntityRenderAttribute_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityRenderAttribute_t.cs#L18)

```csharp
ref CUtlStringToken ID { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### Values

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityRenderAttribute_t.cs#L20)

```csharp
ref Vector4D Values { get; }
```

#### Property Value

- [Vector4D](/docs/api/natives/vector4d)

## Methods

### IDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityRenderAttribute_t.cs#L22)

```csharp
void IDUpdated()
```

### ValuesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntityRenderAttribute_t.cs#L23)

```csharp
void ValuesUpdated()
```

