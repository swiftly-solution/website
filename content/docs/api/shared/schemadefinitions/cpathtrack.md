---
title: CPathTrack
---

```csharp
public interface CPathTrack : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPathTrack>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AltName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L27)

```csharp
string AltName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IterVal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L29)

```csharp
ref int IterVal { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Length

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L25)

```csharp
ref float Length { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnPass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L33)

```csharp
CEntityIOOutput OnPass { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OrientationType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L31)

```csharp
ref TrackOrientationType_t OrientationType { get; }
```

#### Property Value

- [TrackOrientationType_t](/docs/api/shared/schemadefinitions/trackorientationtype_t)

### Paltpath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L21)

```csharp
CPathTrack? Paltpath { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### Pnext

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L17)

```csharp
CPathTrack? Pnext { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### Pprevious

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L19)

```csharp
CPathTrack? Pprevious { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L23)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

