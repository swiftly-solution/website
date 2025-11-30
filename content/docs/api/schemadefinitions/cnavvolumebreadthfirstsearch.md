---
title: CNavVolumeBreadthFirstSearch
---

# Interface CNavVolumeBreadthFirstSearch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavVolumeBreadthFirstSearch.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNavVolumeBreadthFirstSearch : CNavVolumeCalculatedVector, CNavVolume, ISchemaClass<CNavVolume>, ISchemaClass<CNavVolumeCalculatedVector>, ISchemaClass<CNavVolumeBreadthFirstSearch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNavVolumeCalculatedVector](/docs/api/schemadefinitions/cnavvolumecalculatedvector)
- [CNavVolume](/docs/api/schemadefinitions/cnavvolume)
- [ISchemaClass<CNavVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNavVolumeCalculatedVector>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNavVolumeBreadthFirstSearch>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### SearchDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavVolumeBreadthFirstSearch.cs#L20)

```csharp
ref float SearchDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavVolumeBreadthFirstSearch.cs#L18)

```csharp
ref Vector StartPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

