---
title: FeQuad_t
---

```csharp
public interface FeQuad_t : ISchemaClass<FeQuad_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Node** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeQuad_t.cs#L16)

```csharp
ISchemaFixedArray<ushort> Node { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### **Shape** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeQuad_t.cs#L20)

```csharp
ISchemaFixedArray<Vector4D> Shape { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector4D](/docs/api/shared/natives/vector4d)>

### **Slack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeQuad_t.cs#L18)

```csharp
ref float Slack { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

