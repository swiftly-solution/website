---
title: CNavVolumeSphere
---

# Interface CNavVolumeSphere

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavVolumeSphere.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNavVolumeSphere : CNavVolume, ISchemaClass<CNavVolume>, ISchemaClass<CNavVolumeSphere>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNavVolume](/docs/api/schemadefinitions/cnavvolume)
- [ISchemaClass<CNavVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNavVolumeSphere>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Center

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavVolumeSphere.cs#L18)

```csharp
ref Vector Center { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Radius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavVolumeSphere.cs#L20)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

