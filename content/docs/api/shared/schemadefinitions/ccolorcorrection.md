---
title: CColorCorrection
---

```csharp
public interface CColorCorrection : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CColorCorrection>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ClientSide** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L36)

```csharp
ref bool ClientSide { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CurWeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L44)

```csharp
ref float CurWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L32)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Exclusive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L38)

```csharp
ref bool Exclusive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FadeInDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L16)

```csharp
ref float FadeInDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FadeOutDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L18)

```csharp
ref float FadeOutDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LookupFilename** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L48)

```csharp
string LookupFilename { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Master** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L34)

```csharp
ref bool Master { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MaxFalloff** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L42)

```csharp
ref float MaxFalloff { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaxWeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L28)

```csharp
ref float MaxWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MinFalloff** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L40)

```csharp
ref float MinFalloff { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NetlookupFilename** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L46)

```csharp
string NetlookupFilename { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **StartDisabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L30)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **StartFadeInWeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L20)

```csharp
ref float StartFadeInWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StartFadeOutWeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L22)

```csharp
ref float StartFadeOutWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TimeStartFadeIn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L24)

```csharp
GameTime_t TimeStartFadeIn { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **TimeStartFadeOut** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L26)

```csharp
GameTime_t TimeStartFadeOut { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

## Methods

### **ClientSideUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L55)

```csharp
void ClientSideUpdated()
```

### **CurWeightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L59)

```csharp
void CurWeightUpdated()
```

### **EnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L53)

```csharp
void EnabledUpdated()
```

### **ExclusiveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L56)

```csharp
void ExclusiveUpdated()
```

### **FadeInDurationUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L50)

```csharp
void FadeInDurationUpdated()
```

### **FadeOutDurationUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L51)

```csharp
void FadeOutDurationUpdated()
```

### **MasterUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L54)

```csharp
void MasterUpdated()
```

### **MaxFalloffUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L58)

```csharp
void MaxFalloffUpdated()
```

### **MaxWeightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L52)

```csharp
void MaxWeightUpdated()
```

### **MinFalloffUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L57)

```csharp
void MinFalloffUpdated()
```

### **NetlookupFilenameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrection.cs#L60)

```csharp
void NetlookupFilenameUpdated()
```

