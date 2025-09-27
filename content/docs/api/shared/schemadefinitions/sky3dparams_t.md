---
title: sky3dparams_t
---

```csharp
public interface sky3dparams_t : ISchemaClass<sky3dparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Clip3DSkyBoxNearToWorldFar** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L20)

```csharp
ref bool Clip3DSkyBoxNearToWorldFar { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Clip3DSkyBoxNearToWorldFarOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L22)

```csharp
ref float Clip3DSkyBoxNearToWorldFarOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Fog** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L24)

```csharp
fogparams_t Fog { get; }
```

#### Property Value

- [fogparams_t](/docs/api/shared/schemadefinitions/fogparams_t)

**Origin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L18)

```csharp
ref Vector Origin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L16)

```csharp
ref short Scale { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**WorldGroupID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L26)

```csharp
ref uint WorldGroupID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

**Clip3DSkyBoxNearToWorldFarOffsetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L31)

```csharp
void Clip3DSkyBoxNearToWorldFarOffsetUpdated()
```

**Clip3DSkyBoxNearToWorldFarUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L30)

```csharp
void Clip3DSkyBoxNearToWorldFarUpdated()
```

**FogUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L32)

```csharp
void FogUpdated()
```

**OriginUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L29)

```csharp
void OriginUpdated()
```

**ScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L28)

```csharp
void ScaleUpdated()
```

**WorldGroupIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L33)

```csharp
void WorldGroupIDUpdated()
```

