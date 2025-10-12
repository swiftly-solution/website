---
title: CEntityDissolve
---

```csharp
public interface CEntityDissolve : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CEntityDissolve>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **DissolveType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L30)

```csharp
ref EntityDisolveType_t DissolveType { get; }
```

- Property Value

- [EntityDisolveType_t](/docs/api/shared/schemadefinitions/entitydisolvetype_t)

### **DissolverOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L32)

```csharp
ref Vector DissolverOrigin { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **FadeInLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L18)

```csharp
ref float FadeInLength { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeInStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L16)

```csharp
ref float FadeInStart { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeOutLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L26)

```csharp
ref float FadeOutLength { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeOutModelLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L22)

```csharp
ref float FadeOutModelLength { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeOutModelStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L20)

```csharp
ref float FadeOutModelStart { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeOutStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L24)

```csharp
ref float FadeOutStart { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Magnitude** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L34)

```csharp
ref uint Magnitude { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L28)

```csharp
GameTime_t StartTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

## Methods

### **DissolveTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L43)

```csharp
void DissolveTypeUpdated()
```

### **DissolverOriginUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L44)

```csharp
void DissolverOriginUpdated()
```

### **FadeInLengthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L37)

```csharp
void FadeInLengthUpdated()
```

### **FadeInStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L36)

```csharp
void FadeInStartUpdated()
```

### **FadeOutLengthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L41)

```csharp
void FadeOutLengthUpdated()
```

### **FadeOutModelLengthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L39)

```csharp
void FadeOutModelLengthUpdated()
```

### **FadeOutModelStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L38)

```csharp
void FadeOutModelStartUpdated()
```

### **FadeOutStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L40)

```csharp
void FadeOutStartUpdated()
```

### **MagnitudeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L45)

```csharp
void MagnitudeUpdated()
```

### **StartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityDissolve.cs#L42)

```csharp
void StartTimeUpdated()
```

