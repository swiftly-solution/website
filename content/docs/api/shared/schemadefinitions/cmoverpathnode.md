---
title: CMoverPathNode
---

```csharp
public interface CMoverPathNode : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CMoverPathNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### InTangentLocal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L17)

```csharp
ref Vector InTangentLocal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Mover

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L35)

```csharp
ref CHandle<CPathMover> Mover { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CPathMover](/docs/api/shared/schemadefinitions/cpathmover)>

### OnPassThrough

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L29)

```csharp
CEntityIOOutput OnPassThrough { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnPassThroughForward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L31)

```csharp
CEntityIOOutput OnPassThroughForward { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnPassThroughReverse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L33)

```csharp
CEntityIOOutput OnPassThroughReverse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStartFromOrInSegment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L25)

```csharp
CEntityIOOutput OnStartFromOrInSegment { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStoppedAtOrInSegment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L27)

```csharp
CEntityIOOutput OnStoppedAtOrInSegment { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OutTangentLocal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L19)

```csharp
ref Vector OutTangentLocal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ParentPathUniqueID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L21)

```csharp
string ParentPathUniqueID { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PathNodeParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L23)

```csharp
string PathNodeParameter { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### XWSPrevParent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoverPathNode.cs#L37)

```csharp
ref CTransform XWSPrevParent { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

